import format from 'date-fns/format';

const formatDate = (date: Date): string => format(date, 'dd/MM/yyyy');

export default formatDate;
