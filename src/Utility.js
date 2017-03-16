class DOM
{
	static RemoveClassFrom(sIDOrClassToRemoveClassFrom, sClassToRemove)
	{
		let oDomElement = document.getElementById(sIDOrClassToRemoveClassFrom);
		if(oDomElement)
			oDomElement.classList.remove(sClassToRemove);
		else
		{
			let lstDomElement = document.getElementsByClassName(sIDOrClassToRemoveClassFrom);
			for (var i = 0; i < lstDomElement.length; i++) 
				lstDomElement[i].classList.remove(sClassToRemove);
		}
	}

	static AddClassTo(sIDOrClassToAddClassTo, sClassToAdd)
	{
		let oDomElement = document.getElementById(sIDOrClassToAddClassTo);
		if(oDomElement)
			oDomElement.classList.add(sClassToAdd);
		else
		{
			const lstDomElement = document.getElementsByClassName(sIDOrClassToAddClassTo);
			for (var i = 0; i < lstDomElement.length; i++) 
				lstDomElement[i].classList.add(sClassToAdd);
		}
	}
}

export default DOM;