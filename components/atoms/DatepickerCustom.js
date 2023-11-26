import classNames from 'classnames';
import dayjs from 'dayjs';
import { Datepicker } from 'flowbite-react';
import { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const customtheme = {
  root: {
    base: 'relative',
  },
  popup: {
    root: {
      base: 'absolute top-10 z-50 block pt-2 ',
      inline: 'relative top-0 z-auto',
      inner: 'inline-block rounded-lg bg-beige p-4 shadow-lg shadow-sage dark:bg-gray-700',
    },
    header: {
      base: '',
      title: 'px-2 py-3 text-center font-semibold text-sage dark:text-white ',
      selectors: {
        base: 'flex justify-between mb-2',
        button: {
          base: 'text-sm rounded-lg text-gray-900 dark:text-white bg-beige dark:bg-gray-700 font-semibold py-2.5 px-5 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200 view-switch',
          prev: 'bg-beige hover:bg-sage-soft hover:text-white',
          next: 'bg-beige hover:bg-sage-soft hover:text-white',
          view: 'bg-beige hover:bg-sage-soft hover:text-white',
        },
      },
    },
    view: {
      base: 'p-1 ',
    },
    footer: {
      base: 'flex mt-2 space-x-2',
      button: {
        base: 'w-full rounded-lg px-5 py-2 text-center bg-beige text-sm font-medium focus:ring-4 focus:ring-cyan-300',
        today: 'bg-sage text-white hover:bg-sage-soft dark:bg-cyan-600 dark:hover:bg-cyan-700',
        clear: 'border border-sage bg-beige text-sage hover:bg-sage-soft hover:bg-opacity-20 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600',
      },
    },
  },
  views: {
    days: {
      header: {
        base: 'grid grid-cols-7 mb-1',
        title: 'dow h-6 text-center  text-sm font-medium leading-6 text-gray-500 dark:text-gray-400',
      },
      items: {
        base: 'grid w-64 grid-cols-7 bg-beige',
        item: {
          base: 'block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-sage-soft hover:text-white dark:text-white dark:hover:bg-gray-600 ',
          selected: 'bg-sage text-white hover:sage-soft',
          disabled: 'text-sage-soft',
        },
      },
    },
    months: {
      items: {
        base: 'grid w-64 grid-cols-4',
        item: {
          base: 'block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-sage-soft hover:text-white dark:text-white dark:hover:bg-gray-600',
          selected: 'bg-sage text-white hover:bg-sage-soft',
          disabled: 'text-gray-500',
        },
      },
    },
    years: {
      items: {
        base: 'grid w-64 grid-cols-4',
        item: {
          base: 'block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 hover:bg-sage-soft hover:text-white dark:text-white dark:hover:bg-gray-600 text-gray-900',
          selected: 'bg-sage text-white hover:bg-sage-soft',
          disabled: 'text-gray-500',
        },
      },
    },
    decades: {
      items: {
        base: 'grid w-64 grid-cols-4 ',
        item: {
          base: 'block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9  hover:bg-sage-soft hover:text-white dark:text-white dark:hover:bg-gray-600 text-gray-900',
          selected: 'bg-sage text-white hover:bg-sage-soft',
          disabled: 'text-gray-500',
        },
      },
    },
  },
};

const DatepickerCustom = () => {
  const [date, setDate] = useState(dayjs(new Date()).format('MMMM D, YYYY'));
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = (value) => {
    const newDate = dayjs(value).format('MMMM D, YYYY');
    setDate(newDate);
    setIsOpen(false);
  };

  const toggleDate = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="w-full text-sage border border-sage p-2 rounded-md flex items-center justify-between" onClick={toggleDate}>
        {date}
        <FaCalendarAlt />
      </button>
      <div className="flex justify-center relative ">
        <div className="absolute">
          <Datepicker theme={customtheme} className={classNames(!isOpen && 'hidden ')} selected={date} onSelectedDateChanged={handleChange} inline />
        </div>
      </div>
    </>
  );
};

export default DatepickerCustom;
