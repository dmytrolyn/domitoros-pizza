export const identifyItems = (category, items) => [...items].reduce((state, curr) => {
        if(curr.category === category) {
            state.push(curr);
        }
        return state;
    }, [])
