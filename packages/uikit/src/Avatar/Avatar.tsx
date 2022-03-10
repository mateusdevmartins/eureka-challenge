import { FaUserAlt } from 'react-icons/fa';
import { AvatarImage, AvatarView } from './styles';

export interface AvatarProps {
  image?: string | undefined;
  size: string;
}

export function Avatar({ image, size }: AvatarProps) {
  if (image) {
    return (
      <AvatarImage
        data-testid="avatar"
        src={image}
        alt="Avatar"
        style={{
          width: size,
          height: size,
          borderRadius: size,
        }}
      />
    );
  } else {
    return (
      <AvatarView
        data-testid="empty-avatar"
        style={{
          width: size,
          height: size,
          borderRadius: size,
        }}
      >
        <FaUserAlt size={size} style={{ margin: '0px 8px 0px 8px' }} />
      </AvatarView>
    );
  }
}
