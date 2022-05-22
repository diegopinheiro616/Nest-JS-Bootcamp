import { IsNumber, IsPositive, IsString, IsNotEmpty, IsOptional } from "class-validator"
import { Exclude, Expose } from "class-transformer";
import { ReportType } from "src/data";

//decorators

export class CreatereportDto {
    @IsNumber()
    @IsPositive()
    amount: number;

    @IsString()
    @IsNotEmpty()
    source: string;
}

export class UpdateReportDto {
    @IsOptional()
    @IsNumber()
    @IsPositive()
    amount: number;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    source: string;
}

export class ReportResponseDto {
    id: string;
    source: string;
    amount: number;

    @Exclude()
    created_at: Date;

    @Exclude()
    updated_at: Date;
    type: ReportType;

    @Expose({ name: 'createdAt'})
    transformCreatedAt() {
        return this.created_at;
    }

    constructor(partial: Partial<ReportResponseDto>) {
        Object.assign(this, partial);
    }
    //Isso faz com que todo objeto que passe por essa class, não precise ser exatamente igual. Pode ser parcial.
}