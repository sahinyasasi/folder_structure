defmodule ReactRedux.Repo do
  use Ecto.Repo,
    otp_app: :react_redux,
    adapter: Ecto.Adapters.Postgres
end
