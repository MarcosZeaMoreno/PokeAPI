import './LeftComponent.css'

function LeftComponent() {
	return (
		<div>
			<form action="">
				<label for="name">Name</label>
				<input type="text" id="name" placeholder="Name"/>
				<label for="type">Type</label>
				<select name="select" id="type">
					<option value="fire">Fire</option>
					<option value="wind">Wind</option>
				</select>
				<label for="description">Description</label>
				<textarea id="description" placeholder="Description"/>
				<label for="Range">Guidance</label>
				<input id="Range" type="range"></input>
			</form>
		</div>
	)
}

export default LeftComponent