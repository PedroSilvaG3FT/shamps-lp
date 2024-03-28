import { ISeoOptimization } from '../../@core/interfaces/seo.interface';

export interface ICourseItem {
  uuid: string;
  name: string;
  link: string;
  alias: string;
  videosURL: string[];
  description: string;
  seoOptimization: ISeoOptimization;
}
