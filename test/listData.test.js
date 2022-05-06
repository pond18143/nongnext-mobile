jest.useFakeTimers()
const testListData = require('../controller/listData')
const toListData = '{"type":"flex","altText":"Flex Message","contents":{"type":"carousel","contents":[{"type":"bubble","hero":{"type":"image","url":"https://media.discordapp.net/attachments/914926041657671721/919979457685651577/applelogo2.jpeg","size":"xxl","aspectRatio":"10:19","aspectMode":"fit"},"body":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"text","text":"apple","weight":"bold","size":"xl","align":"start","wrap":true,"contents":[]},{"type":"text","text":"Description","align":"start…" ","size":"sm","margin":"sm","wrap":true,"contents":[]}]},{"type":"box","layout":"baseline","contents":[{"type":"text","text":" ","weight":"bold","size":"xl","flex":0,"align":"end","wrap":true,"contents":[]},{"type":"text","text":" ","weight":"bold","size":"sm","margin":"sm","wrap":true,"contents":[]}]}]},"footer":{"type":"box","layout":"vertical","spacing":"sm","contents":[{"type":"button","action":{"type":"message","label":"Choose oneplus","text":"ls brand oneplus"},"style":"primary"}]}}]}}'

test('listData', () => {
  expect(testListData.ListData('ls brand', 'U98e1440f1947bb4e81cdf9fa66b90bcc')).toBe(toListData)
});
