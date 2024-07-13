export interface CreateTableUseCase {
    execute: ( options: CreateTableOptions ) => string
}

export interface CreateTableOptions {
    base: number,
    limit?: number
}

export class CreateTable implements CreateTableUseCase {
    constructor(){
        /**
         * DI - Depenency Injection
         */
    }

    execute({ base, limit = 10}: CreateTableOptions){
        let tableBody = '';
        for( let i = 1; i <= limit; i++){
            tableBody += `      ${ base } x ${ i } = ${ base * i }\n`
        }

        return tableBody;
    }
}