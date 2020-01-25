import { Comment } from './comment';

export class Post {
    constructor(
        public postId: number,
        public title:string,
        public textContent: string,
        public comments: Comment[] = [],
        private likes: Set<number> = new Set<number>()
    ) { }

    get numberOfLikes() {
        return this.likes.size;
    }
    alreadyLiked(userId) {
        return this.likes.has(userId)
    }
    like(userId) {
        this.likes.add(userId);
    }
}