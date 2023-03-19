import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Avatar, Cell, TabsItem, Badge, Tabs, Button, Group, Card, LocaleProvider, FormItem, Calendar, CardGrid, ContentCard, Tabbar, TabbarItem, Epic, Separator, ButtonGroup, Text } from '@vkontakte/vkui';
import { Icon28SettingsOutline, Icon24Arrow2SquarepathOutline, Icon28UserCircleOutline, Icon28NewsfeedOutline } from '@vkontakte/icons';
import a from '../img/a.jpg';
import d from '../img/d.webp';

const LK2 = ({ id, go, fetchedUser }) => (
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
			<br/>
			<Separator></Separator>
			<br/>
			<ButtonGroup mode="horizontal" gap="s" stretched>
				<Tabs style={{marginLeft:"6%"}} >
					<TabsItem selected >
					Мои мероприятия
					</TabsItem>
				</Tabs>
				
				<Button size="l"  onClick={go} data-to="lk" mode="tertiary" before={< Icon24Arrow2SquarepathOutline />} style={{position:"absolute", right:"0", marginRight:"8%"}} align="right">
				</Button>
			</ButtonGroup>
			<br/>

			<FormItem align="center"> 
				<Calendar size='l'/>
			</FormItem>

				<CardGrid size="l">
				<Card mode="shadow">
				</Card>
					<ContentCard
						src={a}
						subtitle="Обучение"
						header="Лекция по программированию"
						text="Лекция, направленная на изучение программирования"
						caption = "19:00"
						/>
				</CardGrid>
				<br/>
				
				
		</Group>}
		<br/>
		<br/>

		<Epic tabbar={
                    <Tabbar mode="vertical">
                        <TabbarItem
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

LK2.propTypes = {
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

export default LK2;