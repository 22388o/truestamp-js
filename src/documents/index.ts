'use strict';

import { stringify } from 'querystringify'
import { NewDocument, Document } from './types'
import { Base } from '../base'

const resourceName = 'documents'

export class Documents extends Base {
    createDocument (params: NewDocument) {
        return this.request<Document>(resourceName, {
            method: 'POST',
            body: JSON.stringify(params)
        })
    }

    updateDocument (id: string, params?: NewDocument) {
        return this.request<Document>(`${resourceName}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(params)
        })
    }

    getDocument ( id: string, revision: number ) {
        let query = `${resourceName}/${id}`
        if (revision) {
            query += stringify({ revision: revision }, true) // ?revision=NUM
        }
        return this.request<Document>(query)
    }

}
