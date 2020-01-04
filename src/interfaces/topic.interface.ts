import ICampaign from "./campaign.interface";

export default interface ITopic {
  id: number;
  title: string;
  startDate: string;
  endDate: string;
  campaigns: Array<ICampaign>;
}
