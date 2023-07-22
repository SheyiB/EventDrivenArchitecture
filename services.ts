import {EventEmitter} from 'events'

// export const eventEmmitter = new EventEmitter(); 

export class MyService{

    private eventEmitter: EventEmitter;

    constructor(eventEmitter: EventEmitter){
        this.eventEmitter = eventEmitter
    }

    accessRoute (routeName: string ){
            try{    
                console.log(`Opening ${routeName} Route`)
                this.eventEmitter.emit('routeAccess', routeName);

            }
            catch(e: any){
                return e 
            }
    }

}