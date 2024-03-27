import { Module } from "@nestjs/common";
import { GetAllCoursesModule } from "../producer/getAllCourse/getAllCourse.module";
import { ReplyCommentModule } from "../producer/replyComment/ReplyComment.module";
import { ReturnAllEventsModule } from "./allEvents/AllEvents.module";
import { CommentInPostModule } from "./commentInPost/Comment.module";
import { DeleteCommentInPostModule } from "./deleteOneCommentInPost/DeleteComment.module";
import { DeletePostModule } from "./deletePost/DeletePost.module";
import { DeleteReplyCommentModule } from "./deleteReplyComment/DeleteReply.module";
import { ExchangeModule } from "./exchangeVote/Exchange.module";
import { LikeCOmmentModule } from "./likeAComment/Like.module";
import { LikeAPostModule } from "./likeAPost/LikePost.module";
import { ReplyCommentPostModule } from "./replyCommentPost/ReplyComment.module";
import { AllPostsAndPollsModule } from "./returnAllPostsAndPolls/All.module";
import { ReturnTicketModule } from "./returnAllTickets/ReturnTickets.module";
import { SendAndGetMessagesModule } from "./sendMessageAndGetMessagesByRoom/SendAndGetMessages.module";
import { ToShareModule } from "./toShare/ToShare.module";
import { WatchLessonModule } from "./toWatchLesson/Watch.module";
import { VoteInPollModule } from "./voteInPoll/Vote.module";

@Module({
    imports:[
        GetAllCoursesModule,
        ReplyCommentModule,
        LikeCOmmentModule,
        WatchLessonModule,
        ReturnTicketModule,
        SendAndGetMessagesModule,
        DeletePostModule,
        ToShareModule,
        CommentInPostModule,
        AllPostsAndPollsModule,
        LikeAPostModule,
        VoteInPollModule,
        ExchangeModule,
        DeleteCommentInPostModule,
        DeleteReplyCommentModule,
        ReturnAllEventsModule,
        ReplyCommentPostModule,
    ]
})
export class AnyoneModules {};