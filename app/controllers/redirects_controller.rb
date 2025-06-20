class RedirectsController < ApplicationController
  def qrcode
    redirect_to ENV.fetch("QRCODE_REDIRECT_URL", "/videos"), allow_other_host: false
  end
end
