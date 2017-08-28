module ApplicationHelper

  def auth_token
    html = <<-HTML
      <input type="hidden" name="authorization_token" value="<%= form_authorization_token %>">
    HTML
    html.html_safe
  end

  def patch_override
    html = <<-HTML
      <input type="hidden" name="_method" value="PATCH">
    HTML
    html.html_safe
  end
end
