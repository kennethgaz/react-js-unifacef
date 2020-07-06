import React, { useState, useEffect } from 'react';
import { getUser, GetGithub } from '../../apis/github.api';
import { Card, Segment, Loader, Image, Icon } from 'semantic-ui-react';

interface Props {
  userName?: string;
}

export default function Github(props: Props) {

  const [profile, setProfile] = useState<GetGithub>();

  useEffect(() => {

    async function getProfile(userName: string) {
      try {
        const response = await getUser(userName);
        setProfile(response.data);
      } catch (error) {
        setProfile(undefined);
      }
    }

    if (props.userName) {
      getProfile(props.userName);
    } else {
      setProfile(undefined);
    }
  }, [props])

  if (!props.userName) {
    return <Segment><p>Informe um perfil</p></Segment>
  }

  if (!profile) {
    return <Segment>
      <Loader active={true} />
      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>
  }

  const openGithub = (url: string) => {
    window.open(url, 'blank');
  }

  return (
    <Card onClick={()=>openGithub(profile.html_url)}>
      <Image size='small' src={profile.avatar_url} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{profile.name}</Card.Header>
        <Card.Meta>{profile.login}</Card.Meta>
        <Card.Description>
          <p>{profile.bio}</p>
          <p>{profile.blog}</p>
          <p>{profile.company}</p>
          <p>{profile.email}</p>
          <p>{profile.twitter_username}</p>
          <p></p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra={true}>
        <Icon name='tree'/> {profile.location}
      </Card.Content>
    </Card>
  )
}