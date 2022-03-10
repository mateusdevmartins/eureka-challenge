import { ProgramLevels, User } from '@fieloapp/homestore';
import { RadioButton } from '@fieloapp/uikit';
import { FaInfoCircle } from 'react-icons/fa';
import { getCurrentTier, getNextTier } from '../../utils';
import {
  CurrentTierView,
  GenericText,
  NextTierText,
  NextTierValue,
  NextTierView,
  ProgressBarSegmentView,
  SegmentDivider,
  TierProgressBarView,
  TierProgressView,
  TierView,
} from './styles';

export interface TierProgressProps {
  selectedUser: User;
  programLevels: Array<ProgramLevels>;
}

export function TierProgress({
  selectedUser,
  programLevels,
}: TierProgressProps) {
  return (
    <TierView>
      <CurrentTierView>
        <div style={{ flex: 1 }}>
          <GenericText>
            {getCurrentTier(selectedUser?.balance.points)}
          </GenericText>
        </div>
        <NextTierView>
          <NextTierText>Next Tier</NextTierText>
          <NextTierValue>
            {getNextTier(selectedUser?.balance.points)}
          </NextTierValue>
          <FaInfoCircle style={{ marginLeft: '6px' }} size={10} />
        </NextTierView>
      </CurrentTierView>
      <TierProgressView>
        {programLevels.map((item: any, index: number) => {
          return (
            <TierProgressBarView key={index}>
              <ProgressBarSegmentView>
                <RadioButton
                  isSelected={
                    item.name.toLowerCase() ===
                    getCurrentTier(selectedUser?.balance.points).toLowerCase()
                  }
                />

                <SegmentDivider />
              </ProgressBarSegmentView>
              {index === programLevels.length - 1 && (
                <div>
                  <RadioButton isSelected={false} />
                </div>
              )}
            </TierProgressBarView>
          );
        })}
      </TierProgressView>
    </TierView>
  );
}
