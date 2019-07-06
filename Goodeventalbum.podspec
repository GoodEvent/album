
  Pod::Spec.new do |s|
    s.name = 'Goodeventalbum'
    s.version = '0.0.1'
    s.summary = 'someone'
    s.license = 'MIT'
    s.homepage = 'git@github.com:GoodEvent/album.git'
    s.author = 'GoodEvent'
    s.source = { :git => 'git@github.com:GoodEvent/album.git', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end