function showFarm(farm)
{

	var icons = document.getElementsByClassName('farmIcons')

	for (var i = 0; i < icons.length; i++) {
		if (farm === i) {
			icons[i].classList.add('farmIconActive')
		} else
		{
			icons[i].classList.remove('farmIconActive')
		}
	}



	var farms = document.getElementsByClassName('farm')

	for (var i = 0; i < farms.length; i++) {
		if (farm === i) {
			farms[i].classList.remove('hidden');
			farms[i].classList.add('active');
		} else 
		{
			farms[i].classList.add('hidden');
			farms[i].classList.remove('active');
		}
	}
}