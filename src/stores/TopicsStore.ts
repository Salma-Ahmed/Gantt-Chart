import { observable, action } from "mobx";
import { createContext } from "react";
import ITopic from "../interfaces/topic.interface";

const data = require("../data/data.json");
const topics: Array<ITopic> = data.topics;

class TopicStore {
  @observable currentTopic: ITopic = topics[0];
  @observable topics: Array<ITopic> = topics;

  @action setCurrentTopic = (topicId: any) => {
    const newTopic = topics.find(topic => topic.id === topicId);
    this.currentTopic = newTopic ? newTopic : this.currentTopic;
  };

  // @computed getCurrentTopic = () => {
  //   return this.currentTopic;
  // };
}

export const TopicStoreContext = createContext(new TopicStore());
