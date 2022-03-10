/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react';
import {
  authorize,
  getProgramsById,
  getProgramsLevelsById,
  getUserActivitiesById,
  getUserProfileById,
  getUsers,
} from '@fieloapp/services';
import { Activity, ProgramLevels, Programs, User } from '@fieloapp/homestore';
import { setItem } from '@fieloapp/storage';
import { images } from '@fieloapp/uikit';
import { UserActivities, UserProfile, UserRanking } from '../../components';
import { MainView, LogoImage, ContentView, LogoView } from './styles';

const { logo } = images;

export function HomeScreen() {
  const [usersState, setUsersState] = useState<Array<User>>([]);
  const [selectedUser, setSelectedUser] = useState<User>();
  const [selectedProgram, setSelectedProgram] = useState<Programs>();
  const [programLevels, setProgramLevels] = useState<Array<ProgramLevels>>();
  const [backgroundImage, setBackgroundImage] = useState<string>();
  const [userActivities, setUserActivities] = useState<Array<Activity>>();

  const getAllUsers = useCallback(async () => {
    const response = await getUsers();
    if (response?.data) {
      const user = [...response.data];
      user.sort((userA, userB) => {
        return userB.balance.points - userA.balance.points;
      });

      setUsersState(user);
    }
  }, []);

  const getAuthorization = useCallback(async () => {
    const response = await authorize();
    if (response?.data?.auth === true) {
      await setItem('auth', response.data.token);
      getAllUsers();
    }
  }, []);

  const getWallpaper = useCallback(async () => {
    const ajaxRequest = new XMLHttpRequest();
    ajaxRequest.open(
      'POST',
      'http://www.bing.com/HPImageArchive.aspx?format=xml&idx=0&n=1&mkt=en-US',
      true
    );

    ajaxRequest.send('');
    ajaxRequest.onreadystatechange = function () {
      if (ajaxRequest.readyState === 4) {
        const res = this.response.split('<url>');
        const res1 = res[1].split('</url>');
        setBackgroundImage('https://bing.com' + res1[0]);
      }
    };
  }, []);

  useEffect(() => {
    getAuthorization();
    getWallpaper();
  }, []);

  const selectUser = (user: User) => {
    getUserProfile(user.id);
  };

  const getProgramsLevels = useCallback(async (programId: string) => {
    const response = await getProgramsLevelsById(programId);
    if (response?.data) {
      setProgramLevels(response.data.reverse());
    }
  }, []);

  const getPrograms = useCallback(async (programId: string) => {
    const response = await getProgramsById(programId);
    if (response?.data) {
      await getProgramsLevels(response.data.id);
      setSelectedProgram(response.data);
    }
  }, []);

  const getUserActivities = useCallback(async (userId: string) => {
    const response = await getUserActivitiesById(userId);
    if (response?.data) {
      setUserActivities(response.data);
    }
  }, []);

  const getUserProfile = useCallback(async (userId: string) => {
    const response = await getUserProfileById(userId);
    if (response?.data) {
      setSelectedUser(response.data);
      await getPrograms(response.data.programId);
      await getUserActivities(userId);
    }
  }, []);

  return (
    <MainView style={{ backgroundImage: `url(${backgroundImage})` }}>
      <LogoView>
        <LogoImage src={logo} />
      </LogoView>
      <ContentView>
        <UserRanking userList={usersState} onSelectUser={selectUser} />
        {selectedUser && selectedProgram && programLevels && (
          <UserProfile
            selectedUser={selectedUser}
            userProgram={selectedProgram}
            programLevels={programLevels}
          />
        )}
        {userActivities && <UserActivities userActivities={userActivities} />}
      </ContentView>
    </MainView>
  );
}
