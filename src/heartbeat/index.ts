// import qs from 'querystringify'
import { HeartbeatStatus } from './types'
import { Base } from '../base'

const resourceName = 'heartbeat'

export class Heartbeat extends Base {
    getHeartbeat () {
        return this.request<HeartbeatStatus>(`${resourceName}`)
    }
}
