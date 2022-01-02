# Jbuilder Key Formatting / Converting
# camel_case => camelCase
# json.key_format! camelize: :lower
# json.deep_format_keys!

json.extract! @like, :id, :user_id, :video_id, :comment_id
