const   Rounder = ({sum, sumbol }) => {
    const parseNum = parseFloat(sum);
    const res = parseNum < 0 ? 0 : parseNum.toFixed(2);
    return `${res} ${sumbol}`
}

export default  Rounder;