const { create } = require("react-test-renderer")
const { default: ProfileStatus } = require("./ProfileStatus")

describe('ProfileStatus component', () => {
  test('Status from props should be in the state', () => {
    const component = create(<ProfileStatus status='Subscribe' />)
    const instance = component.getInstance()
    expect(instance.state.status).toBe('Subscribe')
  });

  test('After creation span should be dispayed', () => {
    const component = create(<ProfileStatus status='Subscribe' />)
    const root = component.root
    const span = root.findByType('span')
    expect(span.children.length).not.toBeNull()
  })
  
  test(`After creation input shouldn't be dispayed`, () => {
    const component = create(<ProfileStatus status='Subscribe' />)
    const root = component.root
    expect(() => {
      const input = root.findByType('input')
    }).toThrow()
  })
})

