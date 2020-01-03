import ICampaign from "./campaign.interface";

export default interface ITopic {
  id: number;
  title: string;
  campaigns: Array<ICampaign>;
}
