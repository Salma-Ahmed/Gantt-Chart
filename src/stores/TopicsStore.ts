import { observable, action } from "mobx";
import { createContext } from "react";
import ITopic from "../interfaces/topic.interface";
import ICampaign from "../interfaces/campaign.interface";

const data = require("../data/data.json");
const topics: Array<ITopic> = data.topics;

class TopicStore {
  @observable currentTopic: ITopic = topics[0];
  @observable topics: Array<ITopic> = topics;
  @observable chartStartDate: string = "";
  @observable chartEnDate: string = "";

  @action setCurrentTopic = (topicId: any) => {
    const newTopic = topics.find(topic => topic.id === topicId);
    this.currentTopic = newTopic ? newTopic : this.currentTopic;
  };

  @action changeCampaignStartDate = (
    campaignId: number,
    newStartDate: string,
    newEndDate: string
  ) => {
    this.currentTopic.campaigns.forEach(campaign => {
      if (campaign.id === campaignId) {
        campaign.startDate = newStartDate;
        campaign.endDate = newEndDate;
      }
    });
  };

  @action getCampaign = (campaignId: number): any => {
    this.currentTopic.campaigns.forEach(campaign => {
      if (campaign.id === campaignId) {
        return campaign;
      }
    });
  };
}

export const TopicStoreContext = createContext(new TopicStore());
