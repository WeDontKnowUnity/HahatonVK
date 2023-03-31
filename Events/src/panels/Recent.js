import React from 'react';
import PropTypes from 'prop-types';

import { Panel, Title, TabsItem, Badge, Tabs, Button, Group, Card, PanelHeader, CardGrid, ContentCard, Tabbar, TabbarItem, Epic, Div, Separator, ButtonGroup, Text } from '@vkontakte/vkui';
import { Icon28SettingsOutline, Icon24Arrow2SquarepathOutline, Icon28UserCircleOutline, Icon28NewsfeedOutline } from '@vkontakte/icons';
import a from '../img/b.png';
import d from '../img/basket.jpg'
import h from '../img/Hackaton.jpg'


const Recent = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader></PanelHeader>
		{fetchedUser && (
		<Group>
				<ButtonGroup mode="horizontal" gap="s" stretched>
				<Tabs style={{marginLeft:"6%"}} >
					<TabsItem onClick={go} data-to="recommended" >
					<a>Для Вас</a>
					</TabsItem>
				</Tabs>
				
				<Tabs style={{marginLeft:"6%"}}>
					<TabsItem selected>
					<a>Ближайшие</a>
					</TabsItem>
				</Tabs>
			</ButtonGroup>
				<Separator></Separator>
				<Div>
					<Title level="3">Сегодня:</Title>
				</Div>
				<CardGrid size="l" onClick={go} data-to="cardprog">
				<Card mode="shadow">
				</Card>
					<ContentCard
						src={a}
						subtitle="Развлечения"
						header="Киновечер"
						text="Вечер кино и попкорна"
						caption = "19:00"
						/>
				</CardGrid>

				<Div>
					<Title level="3">Завтра</Title>
				</Div>

				<CardGrid size="l" onClick={go} data-to="basketball">
				<Card mode="shadow">
				</Card>
					<ContentCard
						src={d}
						subtitle="Спорт"
						header="Баскетбол"
						text="Игра в баскетбол"
						caption = "12:00"
						/>
				</CardGrid>

				<CardGrid size="l" onClick={go} data-to="hakaton">
				<Card mode="shadow">
				</Card>
					<ContentCard
						src={h}
						subtitle="Образование"
						header="Соревнования"
						text="Соревнование по разработке"
						caption = "18:00"
						/>
				</CardGrid>

				
                
				<br/>
				<br/>
			</Group>
		)
			}
			<Epic tabbar={
                    <Tabbar mode="vertical">
                        <TabbarItem selected
                            text="Мероприятия">
								<Icon28NewsfeedOutline />
                        </TabbarItem>
                        <TabbarItem onClick={go} data-to="lk" text="Кабинет">  
						<Icon28UserCircleOutline/> 
                        </TabbarItem>
                    </Tabbar>
					}/>
	</Panel>
);

Recent.propTypes = {
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

export default Recent;