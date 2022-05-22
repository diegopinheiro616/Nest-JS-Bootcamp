import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common'
import { map } from 'rxjs'


// Quero criar uma class CustomInterceptor implementando NestInterceptor(blueprint)
//context é a requisição do cliente interceptada antes de chegar ao servidor.
// handler é o endpoint. No caso, o interceptador do context.
// ExecutionContext e CallHandler são os tipos de context e handler

export class CustomInterceptor implements NestInterceptor {
    intercept(
        context: ExecutionContext, handler: CallHandler) {
            return handler.handle().pipe(
                map((data) => {
                    const response = {
                        ...data,
                        createdAt: data.created_at
                    }
                    delete response.updated_at;
                    delete response.created_at;
                    return response;
                }),
            );
    }
}