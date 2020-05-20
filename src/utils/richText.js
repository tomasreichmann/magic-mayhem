export const normalizeNumber = (nr) => {
  const int = parseInt(nr);
  return isNaN(int) ? undefined : int;
};

export const getIconProps = ([_match, label, count]) => ({...(label ? {label} : {}), count: normalizeNumber(count)});

export const ruleList = [
  // {
  //   match: /burning[|]?([^\|]*)?[|]?([^\|]*)?/,
  //   component: IconBurning,
  //   getProps: getIconProps
  // },
]

export const getMatch = (expression, extraProps) => {
  for (let ruleIndex = 0; ruleIndex < ruleList.length; ruleIndex++) {
    const rule = ruleList[ruleIndex];
    const match = expression.match(rule.match);
    const Element = rule.component;
    if (match) {
      return <Element {...rule.getProps(match)} {...extraProps}/>;
    }
  }
  return null;
}

export const richText = (text, extraProps) => {
  const output = [];
  const matches = text.split(/\[([^\]]*)\]/);
  matches.forEach( (match, matchIndex) => {
    output.push(matchIndex % 2 === 1 && getMatch(match, extraProps) || match );
  })
  return <span>{output.map((outputItem, outputIndex) => <span key={outputIndex}>{outputItem}</span>)}</span>;
};