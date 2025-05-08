
CREATE FUNCTION copy_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER 
SET search_path = ''
AS $$
BEGIN
    INSERT INTO profiles(id)
    VALUES (new.id);
    RETURN NEW;
END;
$$;

CREATE TRIGGER user_signup_trigger
AFTER INSERT ON auth.users
FOR EACH ROW
EXECUTE FUNCTION copy_user();