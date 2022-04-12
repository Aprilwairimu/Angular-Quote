export class Quote {
    public showDetails: boolean;
    public voteLikes: number;
    public voteDislikes: number;
    constructor(
        public votes: number,
        public quoteMessage: string,
        public author: string,
        public sender: string,
        
        public postDate: Date
    ) {
        this.showDetails = false;
        this.voteLikes = 0;
        this.voteDislikes = 0;
    }
}
