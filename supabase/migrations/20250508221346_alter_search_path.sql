
CREATE OR REPLACE FUNCTION copy_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER 
SET search_path = public
AS $$
BEGIN
    INSERT INTO profiles(id)
    VALUES (new.id);
    RETURN NEW;
END;
$$;