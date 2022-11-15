import { ChangDuanType } from "../data";
import useInitData from "../composable/useInitData";

const {getChangDuan} = useInitData();

export const useZimuStore = defineStore("dyZimuStore", () => {
    
    const activatedChangDuan:ChangDuanType = getChangDuan() as ChangDuanType;

    return{
        activatedChangDuan
    }

 });
