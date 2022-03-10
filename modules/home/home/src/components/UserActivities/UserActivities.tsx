import { Activity } from '@fieloapp/homestore';
import { ContentContainer, Divider } from '@fieloapp/uikit';
import { format, parse } from 'date-fns';
import { images } from '@fieloapp/uikit';
import {
  AcitvityTitleView,
  ActivityTitle,
  ActivityView,
  DateText,
  DescriptionText,
  ShowFiltersText,
} from './styles';
import { formatDate } from '../../utils';

const { flag } = images;

export interface UserActivitiesProps {
  userActivities: Array<Activity>;
}

export function UserActivities({ userActivities }: UserActivitiesProps) {
  return (
    <ContentContainer>
      <AcitvityTitleView>
        <ActivityTitle>Activity Feed</ActivityTitle>
        <ShowFiltersText>Show Filters</ShowFiltersText>
      </AcitvityTitleView>

      {userActivities.map((activity, index) => {
        return (
          <div key={index}>
            <ActivityView>
              <img style={{ marginRight: '12px' }} src={flag} alt={'Flag'} />
              <div>
                <DateText>{formatDate(activity.date)}</DateText>
                <DescriptionText>{activity.description}</DescriptionText>
              </div>
            </ActivityView>
            {index !== userActivities.length - 1 && (
              <Divider margin={'12px'} width={'100%'}></Divider>
            )}
          </div>
        );
      })}
    </ContentContainer>
  );
}
