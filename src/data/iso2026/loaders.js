import { chapter01Topics } from "./chapter01";
import { chapter02Topics } from "./chapter02";
import { chapter03Topics } from "./chapter03";
import { chapter04Topics } from "./chapter04";
import { chapter05Topics } from "./chapter05";
import { chapter06Topics } from "./chapter06";
import { chapter07Topics } from "./chapter07";

export function getTopics(chapterId){

    switch(Number(chapterId)){

        case 1:
            return chapter01Topics;

        case 2:
            return chapter02Topics;

        case 3:
            return chapter03Topics;

        case 4:
            return chapter04Topics;

        case 5:
            return chapter05Topics;
            
        case 6:
            return chapter06Topics;

        case 7:
            return chapter07Topics;

        default:
            return [];
    }

}