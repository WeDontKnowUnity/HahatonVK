import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Avatar, Cell, TabsItem, Badge, Tabs, Button, Group, Card, CardGrid, ContentCard, Tabbar, TabbarItem, Epic, Separator, ButtonGroup, Text } from '@vkontakte/vkui';
import { Icon28SettingsOutline, Icon24CalendarOutline, Icon28UserCircleOutline, Icon28NewsfeedOutline } from '@vkontakte/icons';
import a from '../img/a.jpg';
import d from '../img/d.webp';

const LKORG = ({ id, go, fetchedUser, value2 }) => (
	<Panel id={id}>
		<PanelHeader>Кабинет</PanelHeader>
		{fetchedUser &&
		<Group>
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				subtitle={`${"Огранизатор ДГТУ, "} ${value2}`}
				after={< Icon28SettingsOutline />}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
			<br/>
			<Separator></Separator>
			<br/>
			<ButtonGroup mode="horizontal" gap="s" stretched>
				<Tabs style={{marginLeft:"6%"}} >
					<TabsItem selected >
					Мои мероприятия
					</TabsItem>
				</Tabs>
				<Tabs style={{marginLeft:"6%"}} >
					<TabsItem onClick={go} data-to="lkorg3">
					Управление
					</TabsItem>
				</Tabs>
			</ButtonGroup>
			<Button size="l" onClick={go} data-to="lkorg2" mode="tertiary" before={< Icon24CalendarOutline />} style={{position:"absolute", right:"0", marginRight:"8%"}} align="right">
				</Button>
			<br/>
			<br/>
				<CardGrid size="l">
				<Card mode="shadow">
				</Card>
					<ContentCard
						src={a}
						subtitle="Обучение"
						header="Лекция по программированию"
						text="Лекция, направленная на изучение программирования"
						caption = "19:00"
						maxHeight={160}
						/>
				</CardGrid>
				<br/>
				<CardGrid size="l">
				<Card mode="shadow">
				</Card>
					<ContentCard
						src={d}
						subtitle="Развлечения"
						header="Красочный день"
						text="Вас ждут веселье и много ярких моментов!"
						caption = "12:00"
						maxHeight={160}
						/>
						
				</CardGrid>
				
		</Group>}
		<br/>
		<br/>

		<Epic tabbar={
                    <Tabbar mode="vertical">
                        <TabbarItem onClick={go} data-to="recommended"
                            text="Мероприятия">
								<Icon28NewsfeedOutline />
                        </TabbarItem>
                        <TabbarItem selected text="Кабинет">  
						<Icon28UserCircleOutline/> 
                        </TabbarItem>
                    </Tabbar>
                }/>

	</Panel>
);

LKORG.propTypes = {
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

export default LKORG;
