import swal from 'sweetalert';

export const appConfirm = ({ message, title = 'Are you sure?', icon = 'warning' }, success, errorBack) =>
	swal({
		title,
		text: message,
		icon: icon,
		buttons: true,
		dangerMode: true
	}).then((action) => {
		if (action) {
			success();
		} else if (errorBack !== undefined) {
			errorBack();
		}
	});

export const appMessage = ({ title, icon = 'success' }) => swal({ title, icon });
export const appError = ({ title, icon = 'error' }) => swal({ title, icon, dangerMode: true });
