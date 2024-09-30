export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never;
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      graphql: {
        Args: {
          operationName?: string;
          query?: string;
          variables?: Json;
          extensions?: Json;
        };
        Returns: Json;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  public: {
    Tables: {
      home_pages: {
        Row: {
          contact_address: string | null;
          contact_email: string | null;
          contact_phone: string | null;
          contact_us_subtext: string | null;
          contact_us_text: string | null;
          cta_button_text: string | null;
          cta_subtext: string | null;
          cta_text: string | null;
          feature_subtext: string | null;
          feature_text: string | null;
          hero_subtext: string | null;
          hero_text: string | null;
          services_text: string | null;
          site_id: string;
        };
        Insert: {
          contact_address?: string | null;
          contact_email?: string | null;
          contact_phone?: string | null;
          contact_us_subtext?: string | null;
          contact_us_text?: string | null;
          cta_button_text?: string | null;
          cta_subtext?: string | null;
          cta_text?: string | null;
          feature_subtext?: string | null;
          feature_text?: string | null;
          hero_subtext?: string | null;
          hero_text?: string | null;
          services_text?: string | null;
          site_id: string;
        };
        Update: {
          contact_address?: string | null;
          contact_email?: string | null;
          contact_phone?: string | null;
          contact_us_subtext?: string | null;
          contact_us_text?: string | null;
          cta_button_text?: string | null;
          cta_subtext?: string | null;
          cta_text?: string | null;
          feature_subtext?: string | null;
          feature_text?: string | null;
          hero_subtext?: string | null;
          hero_text?: string | null;
          services_text?: string | null;
          site_id?: string;
        };
        Relationships: [];
      };
      reviews: {
        Row: {
          created_at: string;
          review_id: string;
          link: string | null;
          stars: number | null;
          text: string | null;
          reviewer_name: string | null;
          site_id: string;
        };
        Insert: {
          created_at?: string;
          review_id?: string;
          link?: string | null;
          stars?: number | null;
          text?: string | null;
          reviewer_name?: string | null;
          site_id: string;
        };
        Update: {
          created_at?: string;
          review_id?: string;
          link?: string | null;
          stars?: number | null;
          text?: string | null;
          reviewer_name?: string | null;
          site_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "reviews_site_id_fkey";
            columns: ["site_id"];
            isOneToOne: false;
            referencedRelation: "sites";
            referencedColumns: ["site_id"];
          },
        ];
      };
      sites: {
        Row: {
          created_at: string;
          site_id: string;
          user_id: string;
          business_name: string;
        };
        Insert: {
          created_at?: string;
          site_id?: string;
          user_id?: string;
          business_name?: string;
        };
        Update: {
          created_at?: string;
          site_id?: string;
          user_id?: string;
          business_name?: string;
        };
        Relationships: [
          {
            foreignKeyName: "sites_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never;
