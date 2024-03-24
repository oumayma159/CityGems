import Token from '@/components/profile/Token';
import { fetchUserTokensById } from '@/utils/actions';
import { UserProfile, auth } from '@clerk/nextjs';

const ProfilePage = async () => {
  const { userId } = auth();
  const currentTokens = await fetchUserTokensById(userId);

  return (
    <div>
      <Token currentTokens={currentTokens}/>
      <UserProfile />
    </div>
  );
};
export default ProfilePage;
