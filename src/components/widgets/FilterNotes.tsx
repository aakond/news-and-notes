import React, { useEffect } from 'react';
import { FilterNotesProps } from '../../interfaces';
import '../../styles/styles.scss';
import $ from 'jquery';

const FilterNotes: React.FC<FilterNotesProps> = ({ onAllClick, onActiveClick, onDoneClick }) => {
	const allClickHandler = () => { onAllClick(); };
	const activeClickHandler = () => { onActiveClick(); };
	const doneClickHandler = () => { onDoneClick(); };

	useEffect(() => {
		$('.collection').on('click', '.collection-item', function () {
			$('.collection .collection-item.active').removeClass('active');
			$(this).addClass('active');
		});
	}, []);

	return <div className='collection filter' id='filter'>
		<a className='collection-item active' id='default-filter' onClick={allClickHandler}>Все заметки</a>
		<a className='collection-item' onClick={activeClickHandler}>Незавершённые заметки</a>
		<a className='collection-item' onClick={doneClickHandler}>Завершённые заметки</a>
	</div>;
};

export default FilterNotes;
