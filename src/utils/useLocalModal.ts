import { destroy, IAnyModelType, Instance, SnapshotIn } from "mobx-state-tree";
import { useEffect, useState } from "react";

export const useLocalModel = (
	model: IAnyModelType,
	snap: SnapshotIn<IAnyModelType>,
): Instance<IAnyModelType> => {
	const [instance] = useState(() => model.create(snap));
	useEffect(() => () => destroy(instance), []);
	return instance;
}