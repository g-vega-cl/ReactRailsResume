require 'bouncer'

describe 'Bouncer' do
  it 'accepts xx from entering the venue' do
    b = Bouncer.new
    bounced = b.bounce('xx')
    expect(bounced).to be_truthy
  end
end