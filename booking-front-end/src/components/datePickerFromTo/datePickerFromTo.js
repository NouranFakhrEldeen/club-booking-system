import React from 'react';
import DatePicker from 'react-datepicker';
import './datePickerFromTo.scss';

function datePickerComp({
  classesWrapper,
  dayDate,
  datePickerDayOnChange,

}) {
  return (
    <div className={classesWrapper}>
      <div className='position-relative d-inline-block'>
        <div className='input-icon-left d-inline-block  bg-white'>
          {/* eslint-disable-next-line max-len */}
          <span className={'fal fa-calendar-alt icons-svg-alignment'} />
        </div>
        <div className='d-inline-block input-have-left-icon'>
          <DatePicker
            selected={dayDate}
            className="form-control min-height-100"
            onChange={(e) => datePickerDayOnChange(e)}
            dateFormat="d.M.yyyy"
            name='from'
            data-testid={'datePicker1'}

          />
        </div>
      </div>
     
    </div>
  );
}

export const DatePickerComp = datePickerComp;