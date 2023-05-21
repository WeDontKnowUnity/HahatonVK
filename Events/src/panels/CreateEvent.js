import React from 'react';
import PropTypes from 'prop-types';
import bridge from '@vkontakte/vk-bridge';

import { VKWebAppShare } from '@vkontakte/vk-bridge';

import { Panel, PanelHeader, Avatar, Cell, Div, TabsItem, FormLayoutGroup, FormItem, Input, Badge, Tabs, Button, Group, Card, CardGrid, ContentCard, Tabbar, TabbarItem, Epic, Separator, ButtonGroup, Text, Title, Select } from '@vkontakte/vkui';
import { Icon20LocationOutline, Icon24PictureOutline, Icon24ArrowLeftOutline, Icon20ShareOutline, Icon28UserCircleOutline, Icon28NewsfeedOutline } from '@vkontakte/icons';
import b from '../img/progr.jpg';
import d from '../img/d.webp';

function VKShare() {
	bridge.send('VKWebAppShare', {
		link: 'https://vk.com/vkappsdev'
		})
		.then((data) => { 
		  if (data.result) {
			// Запись размещена
		  }
		})
		.catch((error) => {
		  // Ошибка
		  console.log(error);
		});
  }

const CreateEvent = ({ id, go, fetchedUser, value }) => (
	<Panel id={id}>
		<PanelHeader before={<Icon24ArrowLeftOutline />} onClick={go} data-to={value}>Создание мероприятия</PanelHeader>
		{fetchedUser &&
		<Group>
			<FormItem top="Название">
				<Input type="text" placeholder="Введите название"/>
			</FormItem>

			<FormItem top="Описание" bottom="Максимальное количество символов 200">
				<Input type="text" placeholder="Введите описание" maxLength={200}/>
			</FormItem>

			<FormItem top="Факультет">
				<Select
					placeholder="Выберите факультет" defaultValue={'Все'}
					options={[
					{
						value: 'Все',
						label: 'Все',
					},
					{
						value: 'МКиМТ',
						label: 'МКиМТ',
					},
					{
						value: 'ИИВТ',
						label: 'ИИВТ',
					},
					{
						value: 'АгПр',
						label: 'АгПр',
					},
					]}
				/>
			</FormItem>

			<FormItem top="Категория">
				<Select
					placeholder="Выберите категорию" defaultValue={'Образование'}
					options={[
					{
						value: 'Развлечения',
						label: 'Развлечения',
					},
					{
						value: 'Образование',
						label: 'Образование',
					},
					{
						value: 'Спорт',
						label: 'Спорт',
					},
					]}
				/>
			</FormItem>

			<FormItem top="Количество мест" bottom="Если мест не ограничено то напишите 0">
				<Input type="number" placeholder="Введите количество" maxLength={2}/>
			</FormItem>

			<FormItem top="Дата и время">
			<Input type="datetime-local"/>
			</FormItem>

			<FormItem>
				<Button size="l" appearance="accent" mode="tertiary" before={<Icon24PictureOutline />}>
					Добавить фото
				</Button>
			</FormItem>
			<ButtonGroup mode="vertical" gap="m" stretched>
				<Button size="l" appearance="accent" onClick={go} data-to={value} style={{alignSelf:"center"}}>
					Создать
				</Button>
			</ButtonGroup>
			<br/>


		</Group>}
		<br/>
		<br/>

	</Panel>
);

CreateEvent.propTypes = {
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

export default CreateEvent;
