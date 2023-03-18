import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Avatar, Cell, Button, Group, Div, FormItem, Select, Title, Separator, ButtonGroup, Text } from '@vkontakte/vkui';
import { Icon28SettingsOutline, Icon24GameOutline, Icon28PodcastOutline, Icon24MoneyCircleOutline, Icon24Arrow2SquarepathOutline } from '@vkontakte/icons';

const LK = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Кабинет</PanelHeader>
		{fetchedUser &&
		<Group>
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				subtitle={"Студент ДГТУ, МКиМТ"}
				after={< Icon28SettingsOutline />}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
			<Separator></Separator>
			<ButtonGroup mode="horizontal" gap="s" stretched>
				<Button size="l" mode="tertiary" align="left" style={{marginLeft:"2%", color:"black"}}>
				Мои мероприятия
				</Button>
				<Button size="l" mode="tertiary" before={< Icon24Arrow2SquarepathOutline />} style={{position:"absolute", right:"0", marginRight:"4%"}} align="right">
				</Button>
			</ButtonGroup>
				{/* <CardGrid size="l">
				<Card mode="shadow">
				</Card>
				<ContentCard
					subtitle="мероприятия"
					header="ContentCard example"
					caption="VKUI Styleguide > Blocks > ContentCard"
					/>
				</CardGrid> */}
				
		</Group>}
	</Panel>
);

LK.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default LK;
