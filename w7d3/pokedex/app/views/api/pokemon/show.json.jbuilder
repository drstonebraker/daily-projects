json.pokemon do
  json.extract! @pokemon, :id, :name, :attack, :defense, :poke_type
  json.image_url asset_path(@pokemon.image_url)
  json.moves do
    json.array! @pokemon.moves
  end
end
json.items do
  json.array! @pokemon.items do |item|
    json.extract! item, :id, :name, :pokemon_id, :price, :happiness
    json.image_url asset_path(item.image_url)
  end
end
