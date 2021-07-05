defmodule ReactReduxWeb.PageController do
  use ReactReduxWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
