class GrowingTree {
	on(grid, start_at=grid.get_random_cell(), select_fn=null) {
		let active = []
		active.push(start_at)
		select_fn = select_fn || (c => c[Math.floor(Math.random()*c.length)])

		while (active.length > 0) {
			let cell = select_fn(active)
			let available_neighbors = cell.neighbors().filter(c => c.get_links().length == 0)

			if (available_neighbors.length > 0) {
				let neighbor = available_neighbors[Math.floor(Math.random() * available_neighbors.length)]
				cell.link(neighbor)
				active.push(neighbor)
			}
			else {
				active = active.filter(c => c.get_id() != cell.get_id())
			}
		}
	}
}